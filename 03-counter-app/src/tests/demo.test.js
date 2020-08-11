test('Mi primer prueba true ', () => {
  const isActive = true;
  if (isActive) {
    throw new Error('No esta activo');
  }
});
