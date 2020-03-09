class StandardSpace extends GenericSpace {
  constructor() {
    // validate config against StandardSpaceSchema
  }
  get type() {
    return ['Space', 'StandardSpace'];
  }
  get content() {
    // return all content belonging to this space, coupled with the metadata
    /*
    return {
      [id]: {
        element: <content>
        position: {x, y}
      }
    }
     */
  }
  get data() {
    return {
      content: this.content
    }
  }
}