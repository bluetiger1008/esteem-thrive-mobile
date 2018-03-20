const appActons = {
  GET_CHILDREN: 'GET_CHILDREN',
  GET_CHILDREN_SUCCESS: 'GET_CHILDREN_SUCCESS',
  GET_CHILDREN_FAIL: 'GET_CHILDREN_FAIL',

  get_children: () => ({
    type: appActons.GET_CHILDREN,
  })
};

export default appActons;
