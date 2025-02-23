import * as React from "react";

export function useEvent<T extends Function>(callback: T): T {
  // @ts-ignore
  const fnRef = React.useRef<any>()
  fnRef.current = callback

  const memoFn = React.useCallback<T>(
    ((...args: any) => fnRef.current?.(...args)) as any,
    []
  )

  return memoFn
}
