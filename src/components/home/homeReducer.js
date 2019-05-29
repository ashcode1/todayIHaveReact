const INITIAL_STATE = {
  data: [
    {
      id: '1',
      title: 'Wrote code for React App',
      description: 'Set up project and dependencies',
      tags: [
        'React',
        'JavaScript'  
      ],
      name: 'Ash Hopkins',
      timeUpdated: '12:34pm'
    },
    {
      id: '2',
      title: 'Wrote code for React App',
      description: 'Set up project and dependencies',
      tags: [
        'React',
        'JavaScript'  
      ],
      name: 'Ash Hopkins',
      timeUpdated: '12:34pm'
    }
  ]
} 

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}