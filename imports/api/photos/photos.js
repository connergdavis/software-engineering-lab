import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

/**
 * A database of Businesses.
 */
const Photos = new FilesCollection({
  
  collectionName: 'photos',
  allowClientCode: false,
  
  onBeforeUpload(file) {
    if (file.size <= (10 * 1024 * 1024) && /png|jp?eg/i.test(file.extension)) {
      return true;
    }
    
    return 'Please upload a photo no larger than 10 MB.';
  },
  
});

if (Meteor.isClient) {
  Meteor.subscribe('files.photos.all');
}

if (Meteor.isServer) {
  Meteor.publish('files.photos.all', () => Photos.find().cursor);
  
}

Meteor.methods({
  
  'files.photos.find'(id) {
    return Photos.findOne({ _id: id }).link();
  }
  
});

export default Photos;
