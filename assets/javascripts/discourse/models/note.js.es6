import RestModel from 'discourse/models/rest';

/**
 * Has to be implemented for `../controllers/notebook.js.es6` in order to use
 * Discourse’s store properly.
 */
export default RestModel.extend({
  /**
   * Required when sending PUT requests via Discourse’s store
   */
  updateProperties() {
    return this.getProperties('prior_topic_id', 'next_topic_id', 'sequence_on');
  }
});
