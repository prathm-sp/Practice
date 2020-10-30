import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../Form/SignIn";
import SignUp from "../Form/SignUp";
import Story from "../Story";

const screens = {
  Story: {
    screen: Story,
  },
  SignUp: {
    screen: SignUp,
  },
  SignIn: {
    screen: SignIn,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
