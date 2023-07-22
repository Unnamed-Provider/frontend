<script>
    /**
	 * @type {{ instances: any[] }}
	 */
    let data;

    async function runningAmount() {
        if (!data.instances) return 0;
        return data.instances.filter(item => item.state && item.state.power === "on").length;
    }
</script>

{#if data.instances}
<row>
    <card>
        <h2>Instances Active</h2>
        <span>{data.instances.length}</span>
    </card>
    <card>
        <h2>Instances Running</h2>
        <span>{runningAmount()}/{data.instances.length}</span>
    </card>
    <card>
        <h2>Monthly Cost</h2>
        <span>$0.00</span>
    </card>
</row>
{/if}

<style>
    card span {
        font-size: 2rem;
        font-weight: bold;
    }
    card h2 {
        margin-bottom: 0;
    }
</style>