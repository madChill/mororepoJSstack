import { Test, TestingModule } from '@nestjs/testing';
import { ScansResultController } from './scans.controller';
import { ScansResult } from '../../entities/scans.entity';
import { CreateScansResultDtoService } from './scans.service';
import { ScansResultModule } from './scans.module';

describe('ScanController', () => {
  let controller: ScansResultController;
  let service: CreateScansResultDtoService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports: [ScansResultModule],
      controllers: [ScansResultController],
      providers: [CreateScansResultDtoService],
    }).compile();

    controller = module.get<ScansResultController>(ScansResultController);
    service = module.get<CreateScansResultDtoService>(
      CreateScansResultDtoService,
    );
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const {} = ['test'];
      const result = {
        data: [],
        total: 0,
      };
      // jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll({})).toBe(result);
    });
  });
});
