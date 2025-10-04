import { CacheModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { SharedApiModule, TransformInterceptor } from '@application/shared-api';
import { environment } from '../environments/environment';
import * as fromModules from './modules';

// Load environment variables
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forRoot(environment.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }), // Using MongoDB connection from environment
    ...fromModules.modules,
    SharedApiModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
