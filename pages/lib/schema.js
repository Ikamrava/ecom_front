"use client"

import mongoose from 'mongoose';
export const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },
      images: [{
        type: String,
        required: false,
      }],
      category: {
        type: String,
        required: true,
      },
      properties: {
        type: Object,
        required: false,
      },
    
  },{
    timestamps: true
  });

