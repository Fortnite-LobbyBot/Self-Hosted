import 'dotenv/config'
import FNLB from 'fnlb';

const fnlb = new FNLB({ clusterName: 'FNLB Self Hosted' });

async function startFNLB() {
	await fnlb.start({
		apiToken: process.env.API_TOKEN,
		numberOfShards: isNaN(parseInt(process.env.NUMBER_OF_SHARDS))
			? 2
			: parseInt(process.env.NUMBER_OF_SHARDS),
		botsPerShard: isNaN(parseInt(process.env.BOTS_PER_SHARD))
			? 32
			: parseInt(process.env.BOTS_PER_SHARD),
		categories: process.env.CATEGORIES?.split(',').map((c) => c.trim())
	});
}

async function restartFNLB() {
	console.log('Restarting FNLB...');

	await fnlb.stop();

	await startFNLB();
}

await startFNLB();

setInterval(
	restartFNLB,
	isNaN(parseInt(process.env.RESTART_INTERVAL))
		? 3600000
		: parseInt(process.env.RESTART_INTERVAL / 1000)
);
