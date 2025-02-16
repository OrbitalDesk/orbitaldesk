import { Settings } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function SettingsAlertComponent() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex mx-4 gap-2 items-center">
        <Settings size="16" color="black" />
        <span className="text-sm">Settings</span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Settings size="16" color="black" />
            <span>Settings</span>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div>
              <h2 className="font-semibold text-gray-700">Notifications</h2>
              
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Discard changes</AlertDialogCancel>
          <AlertDialogAction>Save changes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
