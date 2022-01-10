import { Controller, Get, Post, Render, Req } from '@nestjs/common';
import { Request } from 'express'
@Controller('home')
export class HomeController {
  private texts = []

  @Get()
  @Render('home/index')
  index(): Object{
    console.log(this.texts);
    
    return { texts: this.texts }
  }

  @Post()
  async post(@Req() req: Request): Promise<void>{
    this.texts.push(req.body.text)
    console.log(this.texts);
    
  }
}
