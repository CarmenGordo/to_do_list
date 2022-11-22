import { AddButton } from "./AddButton";

export default{
    title: "AddButton",
    component: AddButton
}

const Template = (args) => <AddButton {...args} />

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