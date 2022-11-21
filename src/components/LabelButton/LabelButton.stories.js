import { LabelButton } from "./LabelButton";

export default{
    title: "LabelButton",
    component: LabelButton
}

const Template = (args) => <LabelButton {...args} />

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