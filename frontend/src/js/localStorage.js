export const loadState = () => {
  try {
    let serializedState = localStorage.getItem('tasks-state');
    if (serializedState === null) return undefined;
    
    serializedState = JSON.parse(serializedState);
    const lastChange =  serializedState.lastChange;

    serializedState.state.status.dataIsLoading = true;

    return Date.now() - lastChange < 1000000 ? serializedState.state : undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = { state: state, lastChange: Date.now() };
    localStorage.setItem('tasks-state', JSON.stringify(serializedState));
  } catch (err) {
    // Ignore!!!
  }
};