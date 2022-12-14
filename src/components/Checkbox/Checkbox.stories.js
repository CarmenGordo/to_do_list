import { Checkbox } from "./Checkbox";

export default{
    title: "Checkbox",
    component: Checkbox
}

const Template = (args) => <Checkbox {...args} />

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