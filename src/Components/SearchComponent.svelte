<script lang="ts">
  import { InventoryItemType, type InventoryItem } from "../Types/InventoryItem";
  import type { IInventoryItemAlternatePrice } from "../Types/InventoryItemAlternatePrice";
  import type { Filter, QueryParameters } from "../Types/QueryParameters";
  import type { WebOrderItem } from "../Types/WebOrder";
  import { apiFetch } from "../lib/apiClient";
  import { apiUrl } from "../lib/constants";
  let searchTerm = "";
  let filters: Filter[] = [];
  let inventoryItems: InventoryItem[] = [];

  const warehouseFilter: Filter = {
    FieldName: "WarehouseId",
    Op: "EQUAL",
    Value: "1", // this is 1 for the main warehouse, but this should be the user's warehouse when you incorporate it into your own code.
    And: "false",
    Filters: [],
  };

  filters = [warehouseFilter];

  const doSearch = async () => {
    // filter on the item number
    filters = [warehouseFilter];
    filters.push({
      FieldName: "itemnum",
      Op: "CONTAINS",
      Value: searchTerm,
    });
    const url = apiUrl + "inventoryitem/getpagedinventoryitems2";
    let queryParams: QueryParameters = {
      PageNumber: 1,
      PageSize: 10,
      Filter: filters,
      OrderBy: "itemnum asc",
    };

    const response = await apiFetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryParams),
    });

    if (response.ok) {
      const data = await response.json();
      inventoryItems = data;
      console.log(inventoryItems);
    } else {
      console.log("Error: " + response.status);
    }
  };

  let cartItems: WebOrderItem[] = [];

  const addItemToCart = async (item: InventoryItem) => {
    const warehouseDetails = item.inventoryItemWarehouseDetails[0];
    let uomId = null;
    let listPrice = 0.0;
    let alternatePriceTypeId = null;
    if (item.itemType === "unit") {
      // need to get the uom for the item. We'll just get the first UOM for this example.
      const aap: IInventoryItemAlternatePrice = item.inventoryItemAlternatePrices[0];
      uomId = aap.uomId;
      listPrice = aap.price;
      alternatePriceTypeId = aap.id;
    } else {
      // for simplicity, we're only supporting moulding types and length price type for this example.
      listPrice = warehouseDetails.lengthPrice;
    }
    const cartItem: WebOrderItem = {
      id: 0,
      inventoryItemId: item.id,
      quantity: 1,
      listPrice: listPrice,
      discountPrice: null,
      itemType: item.itemType === InventoryItemType.TYPE_MOULDING ? "length" : null,
      uomId: uomId,
      alternatePriceTypeId: alternatePriceTypeId,
    };
    cartItems = cartItems.concat(cartItem);
  };

  const clearCart = () => {
    cartItems = [];
  };

  const commitOrder = async () => {
    const locationId = 133348; // this is the customer contact id for the demo company.  You'll need to replace this with your own customer contacts id.
    // first create a cart.
    try {
      const url = `${apiUrl}shoppingcart`;
      let response = await apiFetch(`${url}/getshoppingcart/${locationId}`);
      if (!response.ok) {
        alert("Error creating cart");
        return;
      }

      const cart = await response.json();

      cart.webOrderItems = [...cartItems];
      response = await apiFetch(`${url}/commitorder/${cart.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });
      if (response.ok) {
        alert("Order committed");
        clearCart();
      } else {
        alert("Error committing order");
      }
    } catch (e) {
      alert("Error managing shopping cart");
    }
  };

  $: cartCount = cartItems?.length;
</script>

<a href="/orderhistory">Order History</a>
<div style="display: flex; justify-content: space-between; align-items: center; margin: 20px">
  <h1>Search for an item:</h1>
  <h1 style="text-align: right;">
    Cart Items: {cartCount}
    <button on:click={commitOrder}>Commit Order</button>
  </h1>
</div>
<input type="text" bind:value={searchTerm} />
<button on:click={doSearch}>Search</button>
<button on:click={clearCart}>Clear Cart</button>

{#if inventoryItems && inventoryItems.length}
  <h1>Search Results</h1>
  {#each inventoryItems as item}
    <div>
      <h2>{item.itemnum}</h2>
      <p>{item.description}</p>
      {#if item.itemType === "unit"}
        <label>UOM:</label>
        <select>
          {#each item.inventoryItemAlternatePrices as uom}
            <option>
              {uom.uomDescription}
            </option>
          {/each}
        </select>
      {/if}
      <button on:click={() => addItemToCart(item)}>Add to cart</button>
    </div>
  {/each}
{/if}
