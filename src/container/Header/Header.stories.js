import { Form } from "./Form";

export default {
    title: "Form",
    component: Form
}

const Template = (args) => <Form {...args} />

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