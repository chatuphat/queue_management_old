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
      throw new NotFoundException(`Student #${queueID} not found`);
    }
    return existingQueue;
  }

  


}
