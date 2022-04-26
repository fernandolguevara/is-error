function isError(error: Error) {
  if (error === null || error === undefined || typeof (error) !== 'object') {
    return false;
  }

  return typeof (error.stack) !== 'undefined' && typeof (error.message) !== 'undefined' && JSON.stringify(error) === '{}';
}

export default isError;
