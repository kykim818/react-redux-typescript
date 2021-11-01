import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { WhiteButton, BlackButton, Button } from "../components/atoms/Button";

export default {
  title: "Components/Atoms/Button",
  component: Button,
} as Meta;

//
const WhiteButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <WhiteButton {...args} />
);
const BlackButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <BlackButton {...args} />
);

export const White = WhiteButtonTemplate.bind({});
White.args = {
  children: "Button Children",
};
export const Black = BlackButtonTemplate.bind({});
Black.args = {
  children: "Button Black",
};

// export const White = () => {
//   return <WhiteButton />;
// };

// export const Black = () => {
//   return <BlackButton />;
// };
