import connectors from '@/helpers/connectors.json';
import networks from '@/helpers/networks.json';

const config = {
  env: 'master',
  connectors,
  networks
};

const domainName = window.location.hostname;
if (domainName.includes('localhost')) config.env = 'local';
if (domainName.includes('vote.defily.io')) config.env = 'local';
if (domainName === 'vote.defily.io') {
  config.env = 'local';
}

export default config;
