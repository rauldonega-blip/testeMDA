import { Router } from 'express';
import WorkflowController from '../controllers/WorkflowController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.post('/:documentId/submit-approval', authenticate, authorize(['edit']), WorkflowController.submitForApproval.bind(WorkflowController));
router.post('/:documentId/approve', authenticate, authorize(['approve']), WorkflowController.approveDocument.bind(WorkflowController));
router.post('/:documentId/reject', authenticate, authorize(['approve']), WorkflowController.rejectDocument.bind(WorkflowController));
router.get('/:documentId/status', authenticate, WorkflowController.getWorkflowStatus.bind(WorkflowController));
router.post('/:documentId/archive', authenticate, authorize(['edit']), WorkflowController.archiveDocument.bind(WorkflowController));

export default router;
