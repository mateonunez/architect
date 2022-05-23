import { RouterProps } from './reducer';

const handler = async (args: RouterProps): Promise<void> => {
  const { broker, options } = args;

  console.log(`[ yellow router 🟨 ] Received message ${broker.message.content.toString()}`);

  const { channel, message } = broker;

  channel.ack(message);

  return new Promise(resolve => resolve());
};

export default handler;