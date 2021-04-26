export const showWarningToast = (error: any, toast: any) => {
  toast({
    title: error.code,
    description: error.description || error.message,
    status: 'warning',
    duration: 9000,
    isClosable: true,
  })
}

export const showInfoToast = (message: string, toast: any) => {
  toast({
    title: 'Info',
    description: message,
    status: 'info',
    duration: 3000,
    isClosable: true,
  })
}
