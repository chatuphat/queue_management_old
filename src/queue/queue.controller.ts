import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateQueueDto } from 'src/dto/create-queue.dto';
import { UpdateQueueDto } from 'src/dto/update-queue.dto';
import { QueueService } from './queue.service';
import { response } from 'express';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post()
  async createQueue(@Res() response, @Body() createQueueDto: CreateQueueDto) {
    try {
      const newQueue = await this.queueService.createQueue(createQueueDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Queue has been created successfully',
        newQueue,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Queue not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateQueue(
    @Res() response,
    @Param('id') queueID: string,
    @Body() updateQueueDto: UpdateQueueDto,
  ) {
    try {
      const existingQueue = await this.queueService.updateQueue(
        queueID,
        updateQueueDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Queue has been successfully updated',
        existingQueue,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getQueues(@Res() response) {
    try {
      const queueData = await this.queueService.getAllQueue();
      return response.status(HttpStatus.OK).json({
        message: 'All Queues data found successfully',
        queueData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getQueue(@Res() response, @Param('id') queueID: string) {
    try {
      const existingQueue = await this.queueService.getQueue(queueID);
      return response.status(HttpStatus.OK).json({
        message: 'Queues found successfully',
        existingQueue,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteStudent(@Res() response, @Param('id') queueID: string) {
    try {
      const deletedQueue = await this.queueService.deleteQueue(queueID);
      return response.status(HttpStatus.OK).json({
        message: 'Queue deleted successfully',
        deletedQueue,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
