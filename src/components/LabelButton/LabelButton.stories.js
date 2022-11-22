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

export const ToDo = Template.bind({})
ToDo.args = {
    label: "To Do",
    value: "toDo"
}

export const InProgress = Template.bind({})
InProgress.args = {
    label: "In Progress",
    value: "inProgress"
}

export const Done = Template.bind({})
Done.args = {
    label: "Done",
    value: "done"
}

export const Hold = Template.bind({})
Hold.args = {
    label: "Hold",
    value: "hold"
}

export const Dropped = Template.bind({})
Dropped.args = {
    label: "Dropped",
    value: "dropped"
}