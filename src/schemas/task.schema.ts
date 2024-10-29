import { Prop, Schema, prop } from '@nestjs/mongoose';

//The @Schema() decorator marks a class as a schema definition.

@Schema({
  timestamps: true,
})
class Task {
    //The @Prop() decorator defines a property in the document.
    //https://mongoosejs.com/docs/schematypes.html
  @Prop({
    //The @Prop() decorator accepts an options object argument
    //https://mongoosejs.com/docs/schematypes.html#schematype-options
    unique: true,
    required: true,
    trim: true,
  })
  title: string;

  @Prop({
    trim: true,
  })
  desription: string;

  @Prop({
    default:false;
  })
  done: boolean;
}
