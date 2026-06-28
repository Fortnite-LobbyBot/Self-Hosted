import 'dotenv/config';
import FNLB from 'fnlb';

const fnlb = new FNLB({
	clusterName: process.env.CLUSTER_NAME || 'Self Hosted Cluster'
});

const parseListEnv = (value) => {
	if (value === undefined) return undefined;
	const items = value
		.split(',')
		.map((v) => v.trim())
		.filter((v) => v.length > 0);
	return items.length > 0 ? items : undefined;
};

async function startFNLB() {
	await fnlb.start({
		apiToken: process.env.API_TOKEN,
		numberOfShards: isNaN(parseInt(process.env.NUMBER_OF_SHARDS))
			? 2
			: parseInt(process.env.NUMBER_OF_SHARDS),
		botsPerShard: isNaN(parseInt(process.env.BOTS_PER_SHARD))
			? 32
			: parseInt(process.env.BOTS_PER_SHARD),
		categories: parseListEnv(process.env.CATEGORIES),
		bots: parseListEnv(process.env.BOTS)
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
		: parseInt(process.env.RESTART_INTERVAL) * 1000
);
