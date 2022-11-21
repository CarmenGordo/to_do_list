import { Task } from "./Task";

export default{
    title: "Task",
    component: Task
}

const Template = (args) => <Task {...args} />

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