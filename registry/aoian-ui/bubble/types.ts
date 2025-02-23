import type { ReactNode, ReactElement } from "react";

export interface TypingOption {
  /**
   * @default 1
   */
  step?: number
  /**
   * @default 50
   */
  interval?: number
  /**
   * @default null
   */
  suffix?: ReactNode
}

export type BubbleProps = {
  placement?: "start" | "end"
  loading?: boolean
  typing?: boolean | TypingOption
  onTypingComplete?: VoidFunction
  className?: string
  avatarPlaceholder?: boolean
  messageRender?: (content: string) => ReactNode
}

export type BubbleDataType = BubbleProps & {
  content?: ReactNode
  key?: string | number
  role?: string
  header?: ReactNode;
  footer?: ReactNode;
  avatar?: ReactElement;
  variant?: 'filled' | 'borderless' | 'outlined' | 'shadow';
  shape?: 'round' | 'corner';
}


type RoleType = Partial<Omit<BubbleDataType, 'content' | 'key' | 'role'>>

type RolesType =
  | Record<string, RoleType>
  | ((bubbleDataP: BubbleDataType, index: number) => RoleType)

export interface BubbleListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  items?: BubbleDataType[]
  autoScroll?: boolean
  roles?: RolesType
}

export interface BubbleRef {
  nativeElement: HTMLElement
}

export interface BubbleListRef {
  nativeElement: HTMLDivElement
  scrollTo: (info: {
    offset?: number
    key?: string | number
    behavior?: ScrollBehavior
    block?: ScrollLogicalPosition
  }) => void
}
