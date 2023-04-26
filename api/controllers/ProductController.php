<?php
// Load the model and view
require_once('model.php');

class ProductController {
  private $model;
  private $view;

  public function __construct() {
    $this->model = new Model();
    $this->view = new View();
  }

  public function processRequest() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      // Read the object sent from the frontend
      $name = $_POST['name'];
      $email = $_POST['email'];

      // Validate and sanitize the data
      $name = htmlspecialchars($name);
      $email = filter_var($email, FILTER_SANITIZE_EMAIL);

      // Pass the data to the model for processing
      $result = $this->model->processData($name, $email);

      // Render the appropriate view based on the result
      if ($result === true) {
        $this->view->render('success');
      } else {
        $this->view->render('error');
      }
    }
  }
}

// Instantiate the controller and process the request
$controller = new Controller();
$controller->processRequest();