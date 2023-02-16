import { Body } from "./Body";

export default {
    title: "Body",
    component: Body
}

const Template = (args) => <Body {...args} />

export const Example = Template.bind({})
Example.args = {
    example: true,
}

export const Small = Template.bind({})
Small.args = {
    size: "small",
}

export const Medium = Template.bind({})
Medium.args = {
    size: "medium",
}

export const Large = Template.bind({})
Large.args = {
    size: "large",
}