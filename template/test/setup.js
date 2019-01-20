import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@jonny/react-native-mock/mock';

global.sinon = sinon;
chai.use(sinonChai);
Enzyme.configure({ adapter: new Adapter() });
