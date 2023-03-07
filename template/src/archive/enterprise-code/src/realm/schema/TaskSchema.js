const Realm = require('ream');

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
    owner_id: 'string?',
  },
  primaryKey: '_id',
};

export const Taskrealm = await Realm.open({
  path: 'myrealm',
  //   path: 'realm-files/myrealm',
  schema: [TaskSchema],
});

export default TaskSchema;
