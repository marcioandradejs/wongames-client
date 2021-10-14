import { Story, Meta } from '@storybook/react/types-6-0'
import MediaPatch from '.'

export default {
  title: 'MediaPatch',
  component: MediaPatch
} as Meta

export const Desktop: Story = () => (
  <MediaPatch greaterThan="medium">Only on Desktop</MediaPatch>
)
export const Mobile: Story = () => (
  <MediaPatch lessThan="medium">Only on Mobile</MediaPatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
