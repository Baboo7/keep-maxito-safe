const getEnvVariable = (varName: string): string => {
  const envVar = process.env[`REACT_APP_${varName}`];

  if (!envVar) {
    throw new Error(`Error while loading env variable "${varName}"`);
  }

  return envVar;
};

export const API_ENDPOINT = getEnvVariable("API_ENDPOINT");
