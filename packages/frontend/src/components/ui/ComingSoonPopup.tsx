import React from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Construction, Calendar, Bell } from 'lucide-react';

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
  gameName: string;
}

export const ComingSoonPopup: React.FC<ComingSoonPopupProps> = ({ isOpen, onClose, gameName }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="🚧 Feature in Development">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full">
            <Construction size={48} className="text-yellow-400" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-white">{gameName}</h4>
          <p className="text-gray-300">
            This exciting game is currently under development! Our team is working hard to bring you an amazing gaming experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2 text-blue-400">
            <Calendar size={16} />
            <span>Coming Q2 2025</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-400">
            <Bell size={16} />
            <span>Get Notified</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button variant="outline" size="sm" className="flex-1">
            Notify Me
          </Button>
          <Button variant="primary" size="sm" className="flex-1" onClick={onClose}>
            Got It
          </Button>
        </div>
      </div>
    </Modal>
  );
};