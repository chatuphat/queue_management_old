import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQueueDto } from 'src/dto/create-queue.dto';
import { UpdateQueueDto } from 'src/dto/update-queue.dto';
import { IQueue } from 'src/interface/queue.interface';

@Injectable()
export class QueueService {
  constructor(@InjectModel('Queue') private queueModel: Model<IQueue>) {}

  async createQueue(createQueueDto: CreateQueueDto): Promise<IQueue> {
    const newQueue = await new this.queueModel(createQueueDto);
    return newQueue.save();
  }

  async updateQueue(
    queueID: string,
    updateQueueDto: UpdateQueueDto,
  ): Promise<IQueue> {
    const existingQueue = await this.queueModel.findByIdAndUpdate(
      queueID,
      updateQueueDto,
      { new: true },
    );
    if (!existingQueue) {
      throw new NotFoundException(`Queue #${queueID} not found`);
    }
    return existingQueue;
  }

  async getAllQueue(): Promise<IQueue[]> {
    const queueData = await this.queueModel.find();
    if (!queueData || queueData.length == 0) {
      throw new NotFoundException('Queue data not found!');
    }
    return queueData;
  }

  async getQueue(queueID: string): Promise<IQueue> {
    const existingQueue = await this.queueModel.findById(queueID).exec();
    if (!existingQueue) {
      throw new NotFoundException(`Queue #${queueID} not found`);
    }
    return existingQueue;
  }

  async deleteQueue(queueID:string): Promise<IQueue>{
    const deletedQueue = await this.queueModel.findByIdAndDelete(queueID);
    if(!deletedQueue){
      throw new NotFoundException(`Queue #${queueID} not found`);
    }
    return deletedQueue;
  }
}
