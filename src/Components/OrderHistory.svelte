<script lang="ts">
  import type { Filter, QueryParameters } from "../Types/QueryParameters";
  import type { WorkOrder } from "../Types/WorkOrder";
  import type { WorkOrderDetails } from "../Types/WorkOrderDetails";
  import { apiFetch } from "../lib/apiClient";
  import { apiUrl } from "../lib/constants";

  let customerId = 133348; // replace with your customer
  let selectedValue = "all";

  let filters: Filter[] = [];

  const warehouseFilter: Filter = {
    FieldName: "WarehouseId",
    Op: "EQUAL",
    Value: "1", // this is 1 for the main warehouse, but this should be the user's warehouse when you incorporate it into your own code.
    And: "false",
    Filters: [],
  };

  filters = [warehouseFilter];
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    selectedValue = target.value;
  };

  const loadOrders = async () => {
    filters = [warehouseFilter];
    const url = apiUrl + "workorder/getorderhistory";

    if (selectedValue !== "all") {
      filters.push({
        FieldName: "Status",
        Op: "EQUAL",
        Value: selectedValue,
      });
    }
    let queryParams: QueryParameters = {
      PageNumber: 1,
      PageSize: 10,
      Filter: filters,
      OrderBy: "created",
    };

    const response = await apiFetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryParams),
    });

    if (response.ok) {
      workorders = await response.json();
    } else {
      alert("Error loading orders");
    }
  };

  let workorders: WorkOrder[] = [];
</script>

<a href="/search">Search</a>
<h1>Order History</h1>
<label for="customerId"
  >Customer ID:
  <input id="customerId" type="text" bind:value={customerId} />
</label>

<div>
  <label>
    <input type="radio" bind:group={selectedValue} value="all" on:change={handleChange} /> All
  </label>
  <label>
    <input type="radio" bind:group={selectedValue} value="approved" on:change={handleChange} /> Approved
  </label>
  <label>
    <input type="radio" bind:group={selectedValue} value="new" on:change={handleChange} /> New
  </label>
  <label>
    <input type="radio" bind:group={selectedValue} value="complete" on:change={handleChange} /> Complete
  </label>
  <label>
    <input type="radio" bind:group={selectedValue} value="confirmed" on:change={handleChange} /> Confirmed
  </label>
</div>

<button on:click={loadOrders}>Load</button>

{#each workorders as workorder}
  <div>
    <h2>Order #{workorder.id}</h2>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {#each workorder.workOrderDetails as workorderdetail}
          <tr>
            <td>{workorderdetail.inventoryItems.itemnum}</td>
            <td>{workorderdetail.quantityOrdered}</td>
            <td>{workorderdetail.linePrice}</td>
          </tr>
        {/each}
      </tbody>
      Total: ${workorder.totalAmount}
    </table>
  </div>
{/each}

<style>
  label {
    display: block;
    margin-bottom: 5px;
  }
</style>
