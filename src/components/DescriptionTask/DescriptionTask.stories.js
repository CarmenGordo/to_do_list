import { DescriptionTask } from "./DescriptionTask";

export default{
    title: "DescriptionTask",
    component: DescriptionTask
}

const Template = (args) => <DescriptionTask {...args} />

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