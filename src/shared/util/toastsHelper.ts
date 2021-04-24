export const showWarningToast = (error: any, toast: any) => {
  toast({
    title: error.code,
    description: error.description || error.message,
    status: 'warning',
    duration: 9000,
    isClosable: true,
  })
}
