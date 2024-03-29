import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FunkyBar from "./FunkyBar";

const meta: Meta<typeof FunkyBar> = {
    component: FunkyBar,
    title: "Marbella/FunkyBar",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FunkyBar>;

export const Primary: Story = {
    // args: {
    //     primary: true,
    //     disabled: false,
    //     text: "Primary1",
    // },
    render: args => (
        <div
            style={{
                height: "120vh",
                position: "relative",
                background: "#000",
            }}
        >
            scrolling down!!!
            <FunkyBar data-testId="InputField-id" />
        </div>
    ),
};
// Primary.args = {
//     primary: true,
//     disabled: false,
//     text: "Primary",
// };
