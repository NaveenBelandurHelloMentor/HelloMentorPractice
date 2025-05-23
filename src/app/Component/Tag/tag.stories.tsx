import type { Meta,StoryObj } from "@storybook/react";
import Tags from "./tag";

const meta:Meta<typeof Tags> = {
    title:'Component/Tags',
    component:Tags,
    tags:['autodocs'],
  parameters: {
    layout: 'centered', 
  },
}

export default meta

type Story = StoryObj<typeof Tags>

export const LargeTag:Story = {
    args:{
        color:true,
        text:'NEET UG'
    }
}



export const SmallTag:Story = {
    args:{
        color:false,
        text:'NEET PG'
    }
}
