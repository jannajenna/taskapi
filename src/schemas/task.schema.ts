import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

//The @Schema() decorator marks a class as a schema definition.
//Schema decorator to be part of MongoDB
@Schema({
  timestamps: true,
})
export class Task {
  //The @Prop() decorator defines a property in the document.
  //https://mongoosejs.com/docs/schematypes.html
  @Prop({
    //The @Prop() decorator defines a property in the document.
    //The @Prop() decorator accepts an options object argument
    //https://mongoosejs.com/docs/schematypes.html#schematype-options
    unique: true,
    required: true,
    //removes spaces begining and end of the string
    trim: true,
  })
  title: string;

  @Prop({
    trim: true,
  })
  desription: string;

  @Prop({
    default: false,
  })
  done: boolean;
}

//SchemaFactory is used to define and generate Mongoose schemas based on TypeScript classes
export const TaskSchema = SchemaFactory.createForClass(Task);
