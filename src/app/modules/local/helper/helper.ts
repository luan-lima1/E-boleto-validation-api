export const response = async (
  statusCode: number,
  message: string,
  data: any = null
) => {
  return {
    statusCode,
    body: JSON.stringify({
      message,
      data,
    }),
  };
};
