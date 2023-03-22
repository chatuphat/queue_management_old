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
  Version,
  Query,
} from '@nestjs/common';
import { CreateQueueDto } from 'src/dto/create-queue.dto';
import { UpdateQueueDto } from 'src/dto/update-queue.dto';
import { QueueService } from './queue.service';
import { response } from 'express';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Version('1')
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

  @Version('1')
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

  @Version('1')
  @Get()
  async getQueues(@Res() response, @Query() qeueQuery) {
    try {
      const queueData = await this.queueService.getAllQueue(qeueQuery);
      return response.status(HttpStatus.OK).json({
        message: 'All Queues data found successfully',
        queueData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Version('1')
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

  @Version('1')
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
