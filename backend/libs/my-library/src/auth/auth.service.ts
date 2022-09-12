import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(userEmail: string, userPassword: string): Promise<any> {
    return {
      _id: '1',
    };
  }

  createSurveyToken(type: 'quantitative' | 'qualitative') {
    return this.jwtService.sign({ type });
  }
}
