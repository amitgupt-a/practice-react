export const getTime = async () => {
  return new Response(
    JSON.stringify({ message: new Date().toISOString() }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // for CORS (see below)
      },
    }
  );
};
