import UIkit from 'uikit/dist/js/uikit'

export function useUIkit() {
  function notification(
    message: string,
    optionsOrStatus?: string | UIkit.UIkitNotificationOptions | undefined
  ): UIkit.UIkitNotificationElement {
    return UIkit.notification(message, optionsOrStatus)
  }

  // Components are missing type definition of base component: https://github.com/uikit/uikit/issues/4416
  function sticky(
    // @ts-ignore
    element: UIkit.UIkitElement,
    options?: UIkit.UIkitStickyOptions | undefined
  ): void {
    return UIkit.sticky(element, options)
  }

  function icon(
    // @ts-ignore
    element: UIkit.UIkitElement,
    options?: UIkit.UIkitIconOptions | undefined
  ): { svg: Promise<any> } {
    return UIkit.icon(element, options)
  }

  function drop(
    // @ts-ignore
    element: UIkit.UIkitElement,
    options?: UIkit.UIkitDropOptions | undefined
  ): UIkit.UIkitDropElement {
    return UIkit.drop(element, options)
  }

  function offcanvas(
    // @ts-ignore
    element: UIkit.UIkitElement,
    options?: UIkit.UIkitOffcanvasOptions | undefined
  ): UIkit.UIkitOffcanvasElement {
    return UIkit.offcanvas(element, options)
  }

  return { UIkit, notification, sticky, icon, drop, offcanvas }
}
